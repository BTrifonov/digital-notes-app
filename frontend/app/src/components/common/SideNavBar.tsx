import { useTheme } from "@emotion/react";

export default function SideNavBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <div></div>
    )
}