const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="h-full">
        {/* header */}
        <header className="">
            Header
        </header>

        {/* sidebar */}
        <div>Sidebar</div>

        <main>{children}</main>
    </div>
  )
}

export default DashboardLayout