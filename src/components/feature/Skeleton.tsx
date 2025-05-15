/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const skeletonStyle = css`
  display: flex;
  gap: 12px;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: #1e1e1e;
  overflow: hidden;

  .thumbnail {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    background: #2e2e2e;
    background-image: linear-gradient(to right, #2e2e2e 0%, #3a3a3a 20%, #2e2e2e 40%, #2e2e2e 100%);
    background-repeat: no-repeat;
    background-size: 800px 100%;
    animation: ${shimmer} 1.2s linear infinite;
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .line {
    height: 14px;
    border-radius: 4px;
    background: #2e2e2e;
    background-image: linear-gradient(to right, #2e2e2e 0%, #3a3a3a 20%, #2e2e2e 40%, #2e2e2e 100%);
    background-repeat: no-repeat;
    background-size: 800px 100%;
    animation: ${shimmer} 1.2s linear infinite;
  }

  .line.short {
    width: 60%;
  }

  .line.long {
    width: 90%;
  }
`;

const SkeletonItem = () => {
  return (
    <div css={skeletonStyle}>
      <div className="thumbnail" />
      <div className="info">
        <div className="line long min-h-[16px]" />
        <div className="line short min-h-[16px]" />
      </div>
    </div>
  );
};

export default SkeletonItem;
