import * as React from 'react'

import styles from './styles.module.css'

export const TwitterShareButton: React.FC = () => {
  const shareUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Hay nè! Đọc thử xem nhé: ');

  return (
    <a
      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}`}
      target='_blank'
      rel='noopener noreferrer'
      className={styles.twitterShareButton}
      aria-label='Chia sẻ trên Twitter'
    >
      <img
        src='twitter.svg'
        alt='Chia sẻ trên Twitter'
        width='80'
        height='80'
        style={{
          position: 'absolute',
          zIndex: 1001,
          top: 0,
          right: 0,
        }}
      />
    </a>
  );
};
