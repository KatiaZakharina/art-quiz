import { Skeleton } from '@mui/material';

import { GRAY } from 'styles/colors';
import { Picture, StyledCard } from './StyledCategoryCard';

export const CardSkeleton = () => {
  return (
    <StyledCard>
      <Skeleton variant="text" sx={{ bgcolor: GRAY }} style={{ marginBottom: 6 }} />
      <Picture>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ bgcolor: GRAY }}
          style={{ borderRadius: '15px' }}
        />
      </Picture>
    </StyledCard>
  );
};
