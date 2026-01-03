import type { FC } from "react"

export const HostingForm: FC = () => {
    const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const clubName = formData.get('club-name')?.valueOf()
        const location = formData.get('location')?.valueOf()
        const dates = formData.get('dates')?.valueOf()
        const context = formData.get('context')?.valueOf()
        window.open(`mailto:fencingwithoutlimits@gmail.com
        ?subject=FWL @ ${clubName}%0D%0A&body=Club / Organization Name: ${clubName}%0D%0A
        Location: ${location}%0D%0A
        Preferred Dates: ${dates}%0D%0A%0D%0A
        ${context}`, '_blank')
    }
    return (
        <form
            onSubmit={submitHandler}
            className='w-full p-8 bg-white rounded-md text-base
            grid grid-cols-2 gap-4'
        >
            <div className="max-md:col-span-2 *:w-full">
                <p className="text-lg pl-1">Club / Organization Name</p>
                <input type="text" name="club-name" className="border-2 p-2 rounded-md">
                </input>
            </div>
            <div className="max-md:col-span-2 *:w-full">
                <p className="text-lg pl-1">Location</p>
                <input type="text" name="location" className="border-2 p-2 rounded-md">
                </input>
            </div>
            <div className="max-md:col-span-2 *:w-full">
                <p className="text-lg pl-1">Preferred Dates</p>
                <input type="text" name="dates" className="border-2 p-2 rounded-md">
                </input>
            </div>
            <div className="col-span-2 *:w-full">
                <p className="text-lg pl-1">Additional Context</p>
                <textarea name="context" rows={4} className="border-2 p-2 rounded-md">
                Hello! My club is interested in hosting a FWL charity livestream.
                </textarea>
            </div>
            <button type="submit" className="max-md:col-span-2 text-white text-xl bg-blue-600 rounded-md py-1.5 px-3" >
                Send
            </button>
        </form>
    )
}