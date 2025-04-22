export default function AboutApi(){
    return(
        <>
            <div className="m-20 p-20 text-xl text-vistBlue font-bold font-mono">
                <div className="m-5 text-center text-2xl text-green-400">
                    <a href="https://nationnode.vercel.app/" target="_blank" rel="noopener noreferrer">
                    https://countries-api-abhishek.vercel.app/
                    </a>
                </div>
                <p className="text-center">
                Using an API (Application Programming Interface) involves sending requests to an external service to retrieve or send data. In web development, this is typically done using HTTP methods like GET, POST, PUT, or DELETE. You use an API when your application needs to access data or functionality from another source — for example, getting country information from a public REST API.
                In a React app, you might use fetch() or a library like axios to make the API call, then display the data in your UI.
                </p>
            </div>
        </>
    )
}