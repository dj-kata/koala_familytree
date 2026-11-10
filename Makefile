-include .env

WUV ?= uv
WINDOWS_PYTHON_ENV = WSLENV="$${WSLENV:+$${WSLENV}:}PYTHONUTF8/w:PYTHONIOENCODING/w" PYTHONUTF8=1 PYTHONIOENCODING=utf-8

.PHONY: serve validate validate-strict

serve:
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/serve.py

validate:
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/validate_data.py

validate-strict:
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/validate_data.py --strict-images
