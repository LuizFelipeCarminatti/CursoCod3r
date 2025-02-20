export default function Titulo(params:any) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">{params.children}</h1>
            <hr />
        </div>
    )
}