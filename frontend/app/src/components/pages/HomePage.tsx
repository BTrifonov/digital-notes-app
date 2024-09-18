import * as React from 'react';
import { getStroke } from 'perfect-freehand';
import { getSvgPathFromStroke } from '../../utils/getSvgPathFromStroke';
import { Box } from '@mui/material';

type Point = [number, number, number];  // A single point: [x, y, pressure]
type Stroke = Point[];  // A stroke is a collection of points

export default function HomePage() {
  const [strokes, setStrokes] = React.useState<Stroke[]>([]);  // Store multiple strokes
  const [currentStroke, setCurrentStroke] = React.useState<Stroke>([]);  // Store the current stroke being drawn

  function handlePointerDown(e: React.PointerEvent<SVGSVGElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    setCurrentStroke([[e.pageX, e.pageY, e.pressure]]);
  }

  function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
    if (e.buttons !== 1) return;
    setCurrentStroke(prevStroke => [...prevStroke, [e.pageX, e.pageY, e.pressure]]);
  }

  function handlePointerUp() {
    if (currentStroke.length > 0) {
      // Add the completed stroke to the strokes array
      setStrokes(prevStrokes => [...prevStrokes, currentStroke]);
      setCurrentStroke([]);  // Reset the current stroke
    }
  }

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <svg
        height="100%"
        width="100%"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}  // Handle when the pointer is lifted
        style={{ touchAction: 'none', margin: 0, padding: 0 }}
      >
        {/* Render previous strokes */}
        {strokes.map((stroke, index) => {
          const pathData = getSvgPathFromStroke(getStroke(stroke, {
            size: 16,
            thinning: 0.5,
            smoothing: 0.5,
            streamline: 0.5,
          }));
          return <path key={index} d={pathData} stroke="black" fill="black" />;
        })}

        {/* Render the current stroke */}
        {currentStroke.length > 0 && (
          <path
            d={getSvgPathFromStroke(getStroke(currentStroke, {
              size: 16,
              thinning: 0.5,
              smoothing: 0.5,
              streamline: 0.5,
            }))}
            stroke="black"
            fill="black"
          />
        )}
      </svg>
    </Box>
  );
}
