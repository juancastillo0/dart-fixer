import * as assert from "assert";
import { mapCommentToMaxLineLength } from "../dart-docs/comment-utils";
import { recase } from "../utils";

suite("Utils", () => {
  test("recase schema-1", () => {
    assert.equal(recase("schema-1", "PascalCase"), "Schema1");
  });

  test("recase Union1Two", () => {
    assert.equal(recase("Union1Two", "PascalCase"), "Union1Two");
  });

  test("recase UNION1_TWO", () => {
    assert.equal(recase("UNION1_TWO", "PascalCase"), "Union1Two");
  });

  test("recase schema_1_schema1", () => {
    assert.equal(recase("schema_1_schema1", "PascalCase"), "Schema1Schema1");
  });

  test("recase schema_10.45.3_schema-1.2_schema1.2", () => {
    assert.equal(
      recase("schema_10.45.3-schema-1.2_schema1.2", "PascalCase"),
      "Schema10_45_3Schema1_2Schema1_2"
    );
  });

  test("convert comments 80 chars", () => {
    const convertedComment = mapCommentToMaxLineLength(`\
/// REQUIRED. URL using the https scheme with no query or fragment component that the OP asserts as its Issuer Identifier. If Issuer discovery is supported (see Section 2), this value MUST be identical to the issuer value returned by WebFinger. This also MUST be identical to the iss Claim value in ID Tokens issued from this Issuer.
///
/// URL of the OP's OAuth 2.0 Token Endpoint [OpenID.Core]. This is REQUIRED unless only the Implicit Flow is used.
/// REQUIRED. JSON array containing a list of the OAuth 2.0 response_type values that this OP supports. Dynamic OpenID Providers MUST support the code, id_token, and the token id_token Response Type values.
`);
    assert.equal(
      convertedComment,
      `\
/// REQUIRED. URL using the https scheme with no query or fragment component
/// that the OP asserts as its Issuer Identifier. If Issuer discovery is
/// supported (see Section 2), this value MUST be identical to the issuer value
/// returned by WebFinger. This also MUST be identical to the iss Claim value in
/// ID Tokens issued from this Issuer.
///
/// URL of the OP's OAuth 2.0 Token Endpoint [OpenID.Core]. This is REQUIRED
/// unless only the Implicit Flow is used.
/// REQUIRED. JSON array containing a list of the OAuth 2.0 response_type
/// values that this OP supports. Dynamic OpenID Providers MUST support the
/// code, id_token, and the token id_token Response Type values.
`
    );

    assert.equal(
      mapCommentToMaxLineLength("/// small comment"),
      "/// small comment"
    );
    const smallComment2 = "/// small comment\n/// small comment 2";
    assert.equal(mapCommentToMaxLineLength(smallComment2), smallComment2);
  });
});
