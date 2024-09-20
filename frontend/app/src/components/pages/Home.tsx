import * as React from 'react';
import { getStroke } from 'perfect-freehand';
import { getSvgPathFromStroke } from '../../utils/getSvgPathFromStroke';
import { Box, Grid2, Paper, useTheme } from '@mui/material';
import ButtonAppBar from '../common/ButtonAppBar';
import { ButtonAppBarProps } from '../../types/navbar';


type Point = [number, number, number];  // A single point: [x, y, pressure]
type Stroke = Point[];  // A stroke is a collection of points

export default function HomePage({ handleThemeToggle, isDarkMode }: ButtonAppBarProps) {
  const [strokes, setStrokes] = React.useState<Stroke[]>([]);  // Store multiple strokes
  const [currentStroke, setCurrentStroke] = React.useState<Stroke>([]);  // Store the current stroke being drawn

  const theme = useTheme();

  // default value of the canvas should be the full width
  const [isNotesMenuOpen, setIsNotesMenuOpen] = React.useState<boolean>(false);

  const handleNotesMenuToggle = () => {
    setIsNotesMenuOpen(!isNotesMenuOpen);
  }

  function handlePointerDown(e: React.PointerEvent<SVGSVGElement>) {
    const svg = e.currentTarget;
    const { left, top } = svg.getBoundingClientRect();  // Get the position of the SVG in the viewport
    e.currentTarget.setPointerCapture(e.pointerId);
    
    // Adjust coordinates to be relative to the SVG
    setCurrentStroke([[e.clientX - left, e.clientY - top, e.pressure]]);
  }

  function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
    if (e.buttons !== 1) return;
    
    const svg = e.currentTarget;
    const { left, top } = svg.getBoundingClientRect();  // Adjust coordinates to the SVG
    
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

  return (
      <Grid2 container display={'flex'} style={{height: '100vh'}} flexDirection={'column'} spacing={2}>
        <Grid2 size={12}>
          <ButtonAppBar handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} isAuth={true} handleNotesMenuToggle={handleNotesMenuToggle}/>
        </Grid2>
        <Grid2 container display={'flex'} flexDirection={'row'} sx={{flexGrow:1}} justifyContent={'space-evenly'} margin={'0.5em'}>
          <Grid2 size={3} sx={{
            display: isNotesMenuOpen ? 'block' : 'none'
            }}>
              <Box sx={{backgroundColor: 'red', height: '100%', width: '100%', borderStyle: 'hidden', borderRadius: '1em'}}></Box>
          </Grid2> 
          <Grid2 size={isNotesMenuOpen ? 9 : 12}  sx={{borderStyle: 'groove', borderRadius: '1em', borderColor: 'black'}}>
            <svg
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
          </Grid2>
        </Grid2>
    </Grid2>
  );
}
