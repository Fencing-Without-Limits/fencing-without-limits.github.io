import fwlLogo from '/FWL Logo Black.png'

export const LoadingFallback = () => (
    <div className="w-full h-screen flex items-center justify-center flex-col text-center opacity-pulse">
        <img src={fwlLogo} className="w-[200px] h-auto" alt="FWL logo" />
        <span className='text-6xl text-black font-dm'>Loading...</span>
    </div>
)
