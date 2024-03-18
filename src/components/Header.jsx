function Header(props) {
    return (
        <>
            <h1 className="text-3xl font-medium">Hello {props.username}!</h1>
            <p>I help you manage your activivties :)</p>
        </>
    )
}
export default Header