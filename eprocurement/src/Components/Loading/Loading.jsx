import  { Children } from 'react';
import { HashLoader } from 'react-spinners';

const Loading = ({children, loading}) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          {loading && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
              overflow: 'hidden',

            }}>
              <HashLoader color="#54d4ff" />
            </div>
          )}
          <div style={{ pointerEvents: loading ? 'none' : 'auto' ,overflow: loading ? 'hidden' : 'auto',height:'100%'}}>
            {children}
          </div>
        </div>
      );
}

export default Loading;