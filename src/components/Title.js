import React from 'react';

function Title() {
    console.log('Renderd callback');
  return (
    <div>
      useCallback hook
    </div>
  );
}

export default React.memo(Title);
