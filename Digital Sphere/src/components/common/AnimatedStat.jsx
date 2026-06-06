import { useCountUp } from '../../hooks/useCountUp'

export function AnimatedStat({ value }) {
  const { ref, displayValue } = useCountUp(value, 2000)

  return (
    <strong ref={ref}>
      {displayValue}
    </strong>
  )
}
