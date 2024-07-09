import { StyledEngineProvider } from "@mui/material";

export const WithStyledEngine = (component: () => React.ReactNode) => () => (
    <StyledEngineProvider injectFirst>
        {component()}
    </StyledEngineProvider>
)