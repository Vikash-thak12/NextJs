

export default function Name({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Welcome buddy, {params.name}</h1>
        </div>
    )
}