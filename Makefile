# Makefile for sz-sdk-nodejs-grpc

# -----------------------------------------------------------------------------
# Variables
# -----------------------------------------------------------------------------

# "Simple expanded" variables (':=')

# PROGRAM_NAME is the name of the GIT repository.
PROGRAM_NAME := $(shell basename `git rev-parse --show-toplevel`)
MAKEFILE_PATH := $(abspath $(firstword $(MAKEFILE_LIST)))
MAKEFILE_DIRECTORY := $(shell dirname $(MAKEFILE_PATH))
DIST_DIRECTORY := $(MAKEFILE_DIRECTORY)/dist
NS_DIRECTORY := $(DIST_DIRECTORY)/@senzing
TARGET_DIRECTORY := $(DIST_DIRECTORY)/@senzing/sz-sdk-nodejs-grpc
BUILD_VERSION := $(shell git describe --always --tags --abbrev=0 --dirty  | sed 's/v//')
BUILD_TAG := $(shell git describe --always --tags --abbrev=0  | sed 's/v//')
BUILD_ITERATION := $(shell git log $(BUILD_TAG)..HEAD --oneline | wc -l | sed 's/^ *//')
GIT_REMOTE_URL := $(shell git config --get remote.origin.url)
#SENZING_COMPONENTS := szconfig szconfigmanager szdiagnostic szengine szproduct

# Recursive assignment ('=')

# Conditional assignment. ('?=')
# Can be overridden with "export"

# Export environment variables.

.EXPORT_ALL_VARIABLES:

# -----------------------------------------------------------------------------
# The first "make" target runs as default.
# -----------------------------------------------------------------------------

.PHONY: default
default: build

# -----------------------------------------------------------------------------
# Operating System / Architecture targets
# -----------------------------------------------------------------------------


# -----------------------------------------------------------------------------
# Dependency management
# -----------------------------------------------------------------------------

.PHONY: dependencies-for-development
dependencies-for-development:
	@npm install -g grpc-tools
	@npm install -D @grpc/grpc-js @grpc/proto-loader grpc_tools_node_protoc_ts typescript tsx

.PHONY: dependencies
dependencies:
	@npm install -D @grpc/grpc-js @grpc/proto-loader

# -----------------------------------------------------------------------------
# Generate package
# -----------------------------------------------------------------------------

.PHONY: compile
build:
	@npm run build
	@npm run package

# -----------------------------------------------------------------------------
# Documentation
# -----------------------------------------------------------------------------

.PHONY: documentation
documentation:
	@npm run build:docs

# -----------------------------------------------------------------------------
# Clean
# -----------------------------------------------------------------------------

.PHONY: clean
clean:
	@rm -rf $(TARGET_DIRECTORY)/* || true
	@rm -rf $(NS_DIRECTORY)/senzing-sz-sdk-nodejs-grpc*.tgz || true
	@rm -rf $(NS_DIRECTORY)/*.tsbuildinfo || true

# -----------------------------------------------------------------------------
# Utility targets
# -----------------------------------------------------------------------------

.PHONY: help
help:
	$(info Build $(PROGRAM_NAME) version $(BUILD_VERSION)-$(BUILD_ITERATION))
	$(info Makefile targets:)
	@$(MAKE) -pRrq -f $(firstword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$' | xargs


.PHONY: print-make-variables
print-make-variables:
	@$(foreach V,$(sort $(.VARIABLES)), \
		$(if $(filter-out environment% default automatic, \
		$(origin $V)),$(info $V=$($V) ($(value $V)))))

