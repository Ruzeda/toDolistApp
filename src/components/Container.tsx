const Container = ({
    children, // Props that represent the content to be displayed within the container.
    title,    // Props that represent an optional title for the container.
}: {
    children: JSX.Element | JSX.Element[]; // Define the 'children' prop type.
    title?: string;                       // Define the 'title' prop type as an optional string.
}) => {
    return (
        <div className="bg-pink-600 p-4 border shadow rounded-md">
            {/* Render the 'title' if it's provided. */}
            {title && <h2 className="text-2xl pb-2 text-white">{title}</h2>}
            <div>{children}</div> // Render the 'children' within the container.
        </div>
    );
};

export default Container;
