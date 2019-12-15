// hello.cc
#include <node.h>
#include <iostream>

using namespace v8;
using namespace std;
namespace demo {

void Debuggeer(const FunctionCallbackInfo<Value>& args) {
  cout << ""
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "filter", Debuggeer);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo