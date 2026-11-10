-include .env

WUV ?= uv
WINDOWS_PYTHON_ENV = WSLENV="$${WSLENV:+$${WSLENV}:}PYTHONUTF8/w:PYTHONIOENCODING/w" PYTHONUTF8=1 PYTHONIOENCODING=utf-8

.PHONY: serve generate fill-layouts validate validate-strict apply-layout

serve:
	@./scripts/run_server.sh "$(WUV)"

generate:
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/generate_csvs.py

fill-layouts:
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/fill_layout_positions.py
	@$(MAKE) generate

validate:
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/generate_csvs.py --check
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/validate_data.py
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python -m unittest discover -s tests

validate-strict:
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/generate_csvs.py --check
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/validate_data.py --strict-images
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python -m unittest discover -s tests

apply-layout:
	@test -n "$(FILE)" || (echo "FILE=layout.json を指定してください" && exit 2)
	@$(WINDOWS_PYTHON_ENV) "$(WUV)" run --no-project python scripts/apply_layout.py "$(FILE)"
	@$(MAKE) generate
