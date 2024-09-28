/**
 * Create interfaces for DrawToolsSidebar, NotesManagementSidebar, AIToolSidebar
 */

export interface DrawToolsSidebarProps {
    handleColorChange: (color: string) => void, 
    handleLineWeightChange: (lineWeight: number) => void
}

export interface RightSidebarProps extends DrawToolsSidebarProps {}