import './Loader.css';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={`lds-ellipsis ${className}`}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
