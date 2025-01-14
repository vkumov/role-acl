import { ICondition } from "./ICondition";

/**
 *  An interface that defines an access information to be granted or denied.
 *  When you start a method chain with `AccessControl#grant` or `AccessControl#deny`
 *  methods, you're actually building this  object which will eventually be
 *  committed to the underlying grants model.
 *  @interface
 */

interface IAccessInfo {
  /**
   *  Indicates a single or multiple roles for this access information.
   *  @type {String|Array<String>}
   */
  role?: string | string[];

  /**
   *  Indicates a single or multiple roles to be extended by this role
   *  @type {Array<String>}
   */
  extend?: string[];
  /**
   *  Indicates a single or multiple target resources for this access
   *  information.
   *  @type {String|Array<String>}
   */
  resource?: string | string[];
  /**
   *  Defines the resource attributes which are granted. If denied, this will
   *  default to an empty array.
   *  @type {String|Array<String>}
   */
  attributes?: string | string[];
  /**
   *  Defines the type of the operation that is (or not) to be performed on
   *  the resource(s) by the defined role(s).
   *  See {@link ?api=ac#AccessControl.Action|`AccessControl.Action` enumeration}
   *  for possible values.
   *  @type {String}
   */
  action?: string | string[];
  /**
   *  Defines the condition of the resource(s) for the specified action.
   *  for possible values.
   *  @type {ICondition}
   */
  condition?: ICondition;
  inverted?: boolean;
}

export { IAccessInfo };

// tsc removes the code above so we document for JSDoc below.

/**
 *  An interface that defines an access information to be granted or denied.
 *  When you start a method chain with `AccessControl#grant` or `AccessControl#deny`
 *  methods, you're actually building this  object which will eventually be
 *  committed to the underlying grants model.
 *  @typedef AccessControl~IAccessInfo
 *  @type Object
 *
 *  @property {String|Array<String>} role
 *  Indicates a single or multiple roles for this access information.
 *
 *  @property {String|Array<String>} resource
 *  Indicates a single or multiple target resources for this access
 *  information.
 *
 *  @property {String|Array<String>} attributes
 *  Defines the resource attributes which are granted. If denied, this will
 *  default to an empty array.
 *
 *  @property {String} action
 *  Defines the type of the operation that is (or not) to be performed on
 *  the resource(s) by the defined role(s).
 *  See {@link ?api=ac#AccessControl.Action|`AccessControl.Action` enumeration}
 *  for possible values.
 */
