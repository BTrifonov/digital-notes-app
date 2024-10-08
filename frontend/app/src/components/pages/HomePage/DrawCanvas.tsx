import * as React from 'react';
import { getStroke } from 'perfect-freehand';

import { getSvgPathFromStroke } from '../../../utils/getSvgPathFromStroke';
import { DrawCanvasProps } from '../../../types/draw-canvas';

type Point = [number, number, number];  // A single point: [x, y, pressure]
type Stroke = Point[];  // A stroke is a collection of points

export default function DrawCanvas({color, lineWeight}:DrawCanvasProps) {
    const [strokes, setStrokes] = React.useState<Stroke[]>([]);  // Store multiple strokes
    const [currentStroke, setCurrentStroke] = React.useState<Stroke>([]);  // Store the current stroke being drawn


    //TODO: Working on 
    const [vertOriginY, setVertOriginY] = React.useState<number>(0);

    const svgRef = React.useRef<SVGSVGElement|null>(null);

    //--------------------------------------------------------------------------
    // Pointer event handling functions
    //--------------------------------------------------------------------------
    function handlePointerDown(e: React.PointerEvent<SVGSVGElement>) {
      const svg = e.currentTarget;
      const { left, top, height } = svg.getBoundingClientRect();  // Get the position of the SVG in the viewport
      e.currentTarget.setPointerCapture(e.pointerId);
      
      if(e.clientY > height) setVertOriginY(-(e.clientY-height));

      // Adjust coordinates to be relative to the SVG
      setCurrentStroke([[e.clientX - left, e.clientY - top, e.pressure]]);
    }
  
    function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
      if (e.buttons !== 1) return;
      
      const svg = e.currentTarget;
      const { left, top, height } = svg.getBoundingClientRect();  // Adjust coordinates to the SVG
      
      //Implement basic overflow functionality
      if(e.clientY > height) setVertOriginY(-(e.clientY-height));

      setCurrentStroke(prevStroke => [
        ...prevStroke, 
        [e.clientX - left, e.clientY - top, e.pressure]
      ]);
    }
  
    function handlePointerUp() {
      if (currentStroke.length > 0) {
        // Add the completed stroke to the strokes array
        setStrokes(prevStrokes => [...prevStrokes, currentStroke]);
        setCurrentStroke([]);  // Reset the current stroke
      }
    }

    function loadSVG() {
      
    }

    return (
      <svg
      ref={svgRef}
      height="100%"
      width="100%"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ touchAction: 'none', margin: 0, padding: 0 }}
    >
      {/* Render previous strokes */}
      {strokes.map((stroke, index) => {
        const pathData = getSvgPathFromStroke(getStroke(stroke, {
          size: lineWeight,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
        }));
        return <path key={index} d={pathData} stroke={color} fill={color} />;
      })}

      {/* Render the current stroke */}
      {currentStroke.length > 0 && (
        <path
          d={getSvgPathFromStroke(getStroke(currentStroke, {
            size: lineWeight,
            thinning: 0.5,
            smoothing: 0.5,
            streamline: 0.5,
          }))}
          stroke={color}
          fill={color}
        />
          )}
    </svg>
    )
}