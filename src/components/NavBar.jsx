import { useSelector } from "react-redux";

const NavBar = () => {

  const mode = useSelector(state=>state.mode);

  console.log(mode)

  return (
    <nav className={`${mode}-bg-1 ${mode}-text-1 h-11 px-5 flex items-center justify-between`} >
        <h1 className="" >
            THE SOCIAL NETWORK
        </h1>
        <section>

        </section>
    </nav>
  )
}

export {NavBar};