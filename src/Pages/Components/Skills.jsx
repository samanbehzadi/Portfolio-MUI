const Skills = ({percent, label, color, bgColor}) => {
    return (
        <>
            <div className="progress mt-3" style={{height: '25px'}}>
                <div className={`progress-bar progress-bar-striped text-${color}`} role="progressbar" style={{width: `${percent}%`, height: '25px', backgroundColor: `${bgColor}`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
                    {label} {Math.floor(percent)}%
                </div>
            </div>
        </>
    )
}
export default Skills