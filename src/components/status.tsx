export default function Status(props: {
    status: string;
    profile?: { displayName?: string };
}) {
    return (
        <div className="status">
            <p>{props.status}</p>
            {props.profile && <p>{props.profile.displayName}</p>}
        </div>
    );
}