import { Box } from '@mui/material';

export default function SvgIconStyle({ width, height, src, sx }: any) {
    return (
        <Box
            component="span"
            sx={{
                width: width || 24,
                height: height || 24,
                display: 'inline-block',
                bgcolor: 'currentColor',
                mask: `url(${src}) no-repeat center / contain`,
                WebkitMask: `url(${src}) no-repeat center / contain`,
                ...sx,
            }}
        />
    );
}
