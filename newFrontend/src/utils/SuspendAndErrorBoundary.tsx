import { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Box, Button, CircularProgress, Stack, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const RootStyle = styled('div')(({ theme }) => ({
    width: "100%",
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(8, 2),
}));

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {

    const locationNow = location.pathname;
    console.log("Error Fallback", { error })
    const navigate = useNavigate()

    useEffect(() => {
        if (error.status === 401) resetErrorBoundary();
    }, []);

    return (
        <div className="error" color="red">
            <Box sx={{ p: 1 }}>
                <Typography variant="h5">
                    Something Went Wrong:
                </Typography>
                <Typography variant="h6">
                    Try to reload this page or restart the app
                </Typography>
                <Typography variant="body1">
                    Please send the screenshot of this page to <a href="tel:9638051000">9638051000</a> or <a href="tel:7575806994">7575806994</a>
                </Typography>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        position: "fixed",
                        bottom: (theme) => theme.spacing(7),
                        right: (theme) => theme.spacing(15)
                    }}>
                    <Button
                        variant="contained"
                        onClick={() => navigate(-1)}>
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate(0)}>
                        Reload
                    </Button>
                </Stack>
                <Typography>
                    url: {locationNow + window.location.search}
                </Typography>
                <Box m={1} p={0.5} sx={{ overflow: "hidden" }}>
                    <Typography>
                        {error.message || ""}
                    </Typography>
                    <Typography>
                        {error.stack || ""}
                    </Typography>
                </Box>
            </Box>
            {/* <p>Something went wrong...</p>
        <pre>{error.message || ''}</pre>
        <pre>{error.stack.slice(0,120) || ''}</pre> */}
        </div>
    );
}


const SuspenseFallBack = () => {

    return (
        <RootStyle>
            <CircularProgress />
        </RootStyle>
    )
}

const SuspenseAndErrorBoundary = ({ children, suspenseUI }: any) => {

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} >
            <Suspense fallback={suspenseUI || <SuspenseFallBack />}>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}

export default SuspenseAndErrorBoundary;