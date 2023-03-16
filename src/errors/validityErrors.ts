
import { ErrorSeverity, ErrorType, SourceError } from '../types'

export class NoAssignmentToForVariable implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR

  constructor(public node: any) { }

  get location() {
    return this.node.loc!
  }

  public explain() {
    return 'Assignment to a for loop variable in the for loop is not allowed.'
  }

  public elaborate() {
    return this.explain()
  }
}
