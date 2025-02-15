---
title: Update the framework | Commerce Testing
description: Learn how to upddate the Functional Testing Framework for Adobe Commerce and Magento Open Source.
---

# Update the Functional Testing Framework

<InlineAlert variant="info" slots="text"/>

[Find your version] of the Functional Testing Framework. The latest Adobe Commerce or Magento Open Source 2.4.x release supports Functional Testing Framework 3.x. The latest Adobe Commerce or Magento Open Source 2.3.x release supports Functional Testing Framework 2.6.x.

Tests and the framework itself are stored in different repositories.

*  Tests are stored in Module's directory.
*  The Functional Testing Framework is installed separately (usually as a Composer dependency)

To understand different types of update - please follow the [Versioning][] page.

## Patch version update

Takes place when **third** digit of version number changes.

1. Make sure that [Security settings][] are set appropriately.
1. Get latest Framework version with `composer update magento/magento2-functional-testing-framework --with-dependencies`
1. Generate updated tests with `vendor/bin/mftf generate:tests`

## Minor version update

Takes place when **second** digit of version number changes.

1. Check details about backward incompatible changes in the [Changelog][] and update your new or customized tests.
1. Perform all the actions provided for [Patch Version Update][]
1. When updating from versions below `2.5.0`, verify [WYSIWYG settings][]
1. You may need to run the `upgrade:tests` using `vendor/bin/mftf upgrade:tests`

## Major version update

Takes place when **first** digit of version number changes.

1. Check detailed explanation and instructions on major version upgrade in [Backward Incompatible Changes][] and upgrade your new or customized tests.
1. Perform all the actions provided for [Minor Version Update][]

## After updating

1. It is a good idea to regenerate your IDE Schema Definition catalog with `vendor/bin/mftf generate:urn-catalog .idea/misc.xml`
1. Update your tests, including data, metadata and other resources. Check if they contain tags that are unsupported in the newer version.
1. Remove the references to resources (ActionGroups, Sections, Tests) marked as deprecated.

<!-- Link Definitions -->
[Changelog]: https://github.com/magento/magento2-functional-testing-framework/blob/master/CHANGELOG.md
[Backward Incompatible Changes]: backward-incompatible-changes.md
[WYSIWYG settings]: getting-started.md#wysiwyg-settings
[Security settings]: getting-started.md#security-settings
[Find your version]: index.md#find-your-framework-version
[Versioning]: versioning.md#versioning-policy
[Patch Version Update]: #patch-version-update
