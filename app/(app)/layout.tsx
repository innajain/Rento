import Navbar from "../_components/Navbar";


export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
          <Navbar />
          {children} 
    </>
  )
}
