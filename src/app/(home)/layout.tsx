interface Props{
    children: React.ReactNode
}

const Layout = ({children}: Props) =>{
    return(
        <div className="min-h-screen">{children}</div>
    )
}

export default Layout