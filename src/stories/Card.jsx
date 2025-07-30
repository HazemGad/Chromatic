import React from 'react';

const Card = ({ title, content, footer }) => (
    <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '46px',
        maxWidth: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        background: '#fff'
    }}>
        {title && <h3 style={{ margin: '0 0 12px 0' }}>{title}</h3>}
        <div style={{ marginBottom: '12px' }}>{content}</div>
        {footer && <div style={{ borderTop: '1px solid #eee', paddingTop: '8px', color: '#888', fontSize: '0.9em' }}>{footer}</div>}
    </div>
);

export default Card;