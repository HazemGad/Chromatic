export const Button = ({ label, primary, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: primary ? '#1ea7fd' : '#eee',
        color: primary ? '#fff' : '#333',
        padding: '10px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};