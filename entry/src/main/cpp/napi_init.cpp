#include "napi/native_api.h"
#include <string>
#include "hilog/log.h"

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x3200 // Global domain macro, identifying the business domain
#define LOG_TAG "MY_TAG"  

extern int mp4edit(int argc, char** argv);
extern int mp4Decrypt(int argc, char** argv);

static napi_value Add(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2] = {nullptr};

    napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);

    napi_valuetype valuetype0;
    napi_typeof(env, args[0], &valuetype0);

    napi_valuetype valuetype1;
    napi_typeof(env, args[1], &valuetype1);

    double value0;
    napi_get_value_double(env, args[0], &value0);

    double value1;
    napi_get_value_double(env, args[1], &value1);

    napi_value sum;
    napi_create_double(env, value0 + value1, &sum);

    return sum;

}

static napi_value NAPI_Global_mp4editWrap(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];
    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);

    bool isArray;
    napi_is_array(env, argv[0], &isArray);
    if (!isArray) {
        napi_throw_type_error(env, nullptr, "Argument must be an array");
        return nullptr;
    }

    // 获取数组长度
    uint32_t length;
    napi_get_array_length(env, argv[0], &length);

    std::vector<char*> params;
    params.reserve(length);

    for (uint32_t i = 0; i < length; i++) {
        napi_value element;
        napi_get_element(env, argv[0], i, &element);

        size_t strLen;
        napi_get_value_string_utf8(env, element, nullptr, 0, &strLen);
        char* str = (char*)malloc(strLen);
        napi_get_value_string_utf8(env, element, str, strLen + 1, &strLen);
        OH_LOG_ERROR(LOG_APP, "Pure a:%{public}s ",str);
        params.push_back(str);
    }

    napi_value result;
    napi_create_int32(env, mp4edit(length, params.data()), &result);
    
    return result;
}
static napi_value NAPI_Global_mp4decryptWrap(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];
    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);

    bool isArray;
    napi_is_array(env, argv[0], &isArray);
    if (!isArray) {
        napi_throw_type_error(env, nullptr, "Argument must be an array");
        return nullptr;
    }

    // 获取数组长度
    uint32_t length;
    napi_get_array_length(env, argv[0], &length);

    std::vector<char*> params;
    params.reserve(length);

    for (uint32_t i = 0; i < length; i++) {
        napi_value element;
        napi_get_element(env, argv[0], i, &element);

        size_t strLen;
        napi_get_value_string_utf8(env, element, nullptr, 0, &strLen);
        char* str = (char*)malloc(strLen);
        napi_get_value_string_utf8(env, element, str, strLen + 1, &strLen);
        OH_LOG_ERROR(LOG_APP, "Pure a:%{public}s ",str);
        params.push_back(str);
    }

    napi_value result;
    napi_create_int32(env, mp4Decrypt(length, params.data()), &result);
    
    return result;
}
EXTERN_C_START
static napi_value Init(napi_env env, napi_value exports) {
    napi_property_descriptor desc[] = {
        {"add", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"mp4editWrap", nullptr, NAPI_Global_mp4editWrap, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"mp4decryptWrap", nullptr, NAPI_Global_mp4decryptWrap, nullptr, nullptr, nullptr, napi_default, nullptr }
    };
    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
    return exports;
}
EXTERN_C_END

static napi_module demoModule = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = Init,
    .nm_modname = "entry",
    .nm_priv = ((void*)0),
    .reserved = { 0 },
};

extern "C" __attribute__((constructor)) void RegisterEntryModule(void)
{
    napi_module_register(&demoModule);
}
