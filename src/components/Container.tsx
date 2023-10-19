const Container = ({
    children,
    title,
}: {
    children: JSX.Element | JSX.Element[];
    title?: string
}) => {
    return (
        <div className="bg-pink-600 p-4 border shadow rounded-md">
            {title && <h2 className="text-2xl pb-2 text-white">{title}</h2>}
            <div>{children}</div>
            </div>
    );
};

export default Container;