// type Props = {
//     title: string;
//     discription: string;
// }

type A = {
    title: string;
}

type B = {
    discription: string
}

type Props = A & B

const ArrowFunctionalComponentsWithPropsType = ({title, discription}: Props) => {
    return (
        <>
        <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
        <p className="text-center text-yellow-900 font-bold">{discription}</p>
        </>
    )
}

export default ArrowFunctionalComponentsWithPropsType;