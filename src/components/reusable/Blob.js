export default function Blob({ pathIndex }) {
  const paths = [
    'M306.5,345Q140,440,143,255.5Q146,71,309.5,160.5Q473,250,306.5,345Z',
    'M344.5,360.5Q250,471,159.5,360.5Q69,250,159.5,141Q250,32,344.5,141Q439,250,344.5,360.5Z',
    'M355,353Q250,456,133.5,353Q17,250,133.5,132Q250,14,355,132Q460,250,355,353Z',
  ];
  return (
    <svg
      style={{
        zIndex: -1,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '1000px',
      }}
      viewBox='0 0 500 500'
      xmlns='http://www.w3.org/2000/svg'
      width='160%'
      id='blobSvg'>
      <path id='blob' d={paths[pathIndex ?? 0]} fill='#ebf2f1'></path>
    </svg>
  );
}
