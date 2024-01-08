import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const SuspenseAndErrorBoundary = ({ children, suspenseUI }) => {

    return (
        <ErrorBoundary>
            <Suspense>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}

export default SuspenseAndErrorBoundary;