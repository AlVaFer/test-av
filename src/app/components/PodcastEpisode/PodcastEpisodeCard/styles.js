const boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.2)'

export const styles = {
  card: {
    width: '100%',
    padding: '1rem',
    boxShadow,
    minHeight: '20rem',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardmedia: {
    marginTop: '2rem',
    boxShadow,
    borderRadius: '2rem',
  },
}

export const linkifyOptions = {
  target: '_blank',
  nl2br: true,
  render: {
    url: ({ attributes, content }) => {
      return (
        <a {...attributes} style={{ color: '#0000ff' }}>
          {content}
        </a>
      )
    },
  },
}
