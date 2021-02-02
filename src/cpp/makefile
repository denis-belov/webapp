DIR=~/reps/denis-belov/wasm-test/src/cpp

SRC=$(DIR)/src

BUILD=$(DIR)/build

XGK_MATH=~/reps/denis-belov/xgk-math
XGK_MATH_MAKEFILE=$(XGK_MATH)/makefiles/emcc/makefile
XGK_MATH_SRC=$(XGK_MATH)/src
XGK_MATH_BUILD=$(XGK_MATH)/build/emcc



# $(BUILD)/js/main.js : \
# $(XGK_MATH_BUILD)/a/xgk-math.o \
# $(BUILD)/o/main.o \
# $(BUILD)/o/func.o
# 	mkdir -p $(BUILD) && mkdir -p $(BUILD)/js && \
# 	emcc -o $(BUILD)/js/main.js \
# 	-s WASM=1 \
# 	-s SINGLE_FILE=1 \
# 	-s MODULARIZE=1 \
# 	-s EXPORT_ES6=1 \
# 	-s USE_ES6_IMPORT_META=0 \
# 	-s ENVIRONMENT=web \
# 	-s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
# 	-s ASSERTIONS=1 \
# 	-L $(XGK_MATH_BUILD)/a/ \
# 	-l xgk-math \
# 	$(BUILD)/o/func.o \
# 	$(BUILD)/o/main.o
$(BUILD)/js/main.js : \
$(XGK_MATH_BUILD)/a/xgk-math.o \
$(BUILD)/o/main.o \
$(BUILD)/o/func.o
	mkdir -p $(BUILD) && mkdir -p $(BUILD)/js && \
	emcc -o $(BUILD)/js/main.js \
	-s WASM=1 \
	-s SINGLE_FILE=1 \
	-s MODULARIZE=1 \
	-s EXPORT_ES6=1 \
	-s USE_ES6_IMPORT_META=0 \
	-s ENVIRONMENT=web \
	-s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
	-s ASSERTIONS=1 \
	$(XGK_MATH_BUILD)/a/xgk-math.o \
	$(BUILD)/o/func.o \
	$(BUILD)/o/main.o



# $(XGK_MATH_BUILD)/a/xgk-math.o : \
# $(XGK_MATH_SRC)/data/data.h \
# $(XGK_MATH_SRC)/data/vec4/vec4.cpp \
# $(XGK_MATH_SRC)/data/vec4/vec4-32.cpp \
# $(XGK_MATH_SRC)/data/vec4/vec4-128.cpp \
# $(XGK_MATH_SRC)/data/quat/quat.cpp \
# $(XGK_MATH_SRC)/data/quat/quat-32.cpp \
# $(XGK_MATH_SRC)/data/quat/quat-128.cpp \
# $(XGK_MATH_SRC)/data/mat4/mat4.cpp \
# $(XGK_MATH_SRC)/data/mat4/mat4-32.cpp \
# $(XGK_MATH_SRC)/object/object.h \
# $(XGK_MATH_SRC)/object/object.cpp \
# $(XGK_MATH_SRC)/util/util.h \
# $(XGK_MATH_SRC)/util/util.cpp
# 	make -f $(XGK_MATH_MAKEFILE)
$(XGK_MATH_BUILD)/a/xgk-math.o : \
$(XGK_MATH_SRC)/data/data.h \
$(XGK_MATH_SRC)/data/vec4/vec4.cpp \
$(XGK_MATH_SRC)/data/vec4/vec4-32.cpp \
$(XGK_MATH_SRC)/data/vec4/vec4-128.cpp
	make -f $(XGK_MATH_MAKEFILE)



# $(BUILD)/o/main.o : \
# $(SRC)/main.cpp \
# $(SRC)/main.h \
# $(XGK_MATH_SRC)/data/data.h \
# $(XGK_MATH_SRC)/object/object.h \
# $(XGK_MATH_SRC)/util/util.h
# 	mkdir -p $(BUILD) && mkdir -p $(BUILD)/o && \
# 	emcc -o $(BUILD)/o/main.o \
# 	-c \
# 	-O3 \
# 	-msimd128 \
# 	-I $(XGK_MATH_SRC) \
# 	$(SRC)/main.cpp
$(BUILD)/o/main.o : \
$(SRC)/main.cpp \
$(SRC)/main.h \
$(XGK_MATH_SRC)/data/data.h
	mkdir -p $(BUILD) && mkdir -p $(BUILD)/o && \
	emcc -o $(BUILD)/o/main.o \
	-c \
	-O3 \
	-msimd128 \
	-msse \
	-I $(XGK_MATH_SRC) \
	$(SRC)/main.cpp



$(BUILD)/o/func.o : \
$(SRC)/func.cpp
	mkdir -p $(BUILD) && mkdir -p $(BUILD)/o && \
	emcc -o $(BUILD)/o/func.o \
	-c \
	-O3 \
	-msimd128 \
	-msse \
	$(SRC)/func.cpp
