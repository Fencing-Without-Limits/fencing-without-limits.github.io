import fwlLogo from '/FWL Logo Black.png'

export const LoadingFallback = () => (
    <div className='w-full h-screen flex items-center justify-center'>
        <img src={fwlLogo} className="w-3xs h-3xs" alt="FWL logo" />
    </div>
)
