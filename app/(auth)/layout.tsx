export default function authLayout({children}:{children :React.ReactNode}){ 

    return(
        <div className="flex justify-center items-center min-h-full">
            {children}
        </div>
    )

}