import compare_date from "../methods/compare_date"

const validator_after = (value: string, rule_value: string): boolean => {
  return compare_date(rule_value, '>', value)
}

export default validator_after