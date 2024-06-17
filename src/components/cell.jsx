function Cell({ filled, onClick, isDisabled, label }) {
  return (
    <button
      disabled={isDisabled}
      type="button"
      aria-label={label}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

export default Cell;
