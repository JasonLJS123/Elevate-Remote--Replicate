import Loader from 'react-js-loader'
export default function LoadingScreen() {
    return (
        <div
            style={{
                height: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--background-color-secondary)'
            }}
        >
            <Loader type='bubble-loop' bgColor={'var(--primary-color)'} size={50} />
        </div>
    )
}
