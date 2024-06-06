(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{566:function(e,r,k){"use strict";k.r(r);var s=k(5),l=Object(s.a)({},(function(){var e=this,r=e.$createElement,k=e._self._c||r;return k("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[k("h1",{attrs:{id:"ubuntu-kworker导致cpu占用过高"}},[k("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-kworker导致cpu占用过高"}},[e._v("#")]),e._v(" ubuntu kworker导致cpu占用过高")]),e._v(" "),k("p",[e._v('kworker，即 Kernel Worker，是 Linux3.x 版本引入的。其本质上可以算是一个占位符进程，内核实际处理工作大部分由它完成。kworker 占用 CPU 高，大多数的原因是过多的系统调用产生了过多的中断。解决方法如下：\nsudo grep . -r /sys/firmware/acpi/interrupts/\n会出现很多 gpe，找到 gpe 旁边的数字比较高的。\nimage.png\n例如我的是 gpe1B。把它给 disable 掉\necho "disable" > /sys/firmware/acpi/interrupts/gpe1B\n此使回到任务管理器，可以发现 kworker 的 CPU 使用率变正常了。')]),e._v(" "),k("p",[k("a",{attrs:{href:"%5Bhttps://ubuntu.dovov.com/1383/kworker%ef%bc%8c%e5%ae%83%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%8c%e4%b8%ba%e4%bb%80%e4%b9%88%e5%ae%83%e4%bc%9a%e5%8d%a0%e7%94%a8%e8%bf%99%e4%b9%88%e5%a4%9acpu%ef%bc%9f.html%5D(https://askubuntu.com/questions/33640/kworker-what-is-it-and-why-is-it-hogging-so-much-cpu)"}},[e._v("Kworker，它是什么，为什么它会占用这么多CPU？")])]),e._v(" "),k("p",[k("strong",[e._v("使用perf回溯")])]),e._v(" "),k("p",[k("code",[e._v("perf record -g -a sleep 10")])]),e._v(" "),k("p",[e._v("查看报告"),k("code",[e._v("perf report")])]),e._v(" "),k("div",{staticClass:"language- extra-class"},[k("pre",{pre:!0,attrs:{class:"language-text"}},[k("code",[e._v("+   69.91%     0.00%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] ret_from_fork      ◆\n+   69.91%     0.00%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] kthread            ▒\n+   69.91%     0.05%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] worker_thread      ▒\n+   69.82%     0.16%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] process_one_work   ▒\n+   61.12%     0.10%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] rpm_idle           ▒\n+   60.73%     0.24%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] rpm_suspend        ▒\n+   60.18%     0.04%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] pm_runtime_work    ▒\n+   59.97%     0.03%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_runtime_idle   ▒\n+   59.93%     0.02%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] __pm_runtime_suspen▒\n+   59.77%     0.03%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] rpm_callback       ▒\n+   59.67%     0.06%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] __rpm_callback     ▒\n+   59.47%     0.06%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_runtime_suspend▒\n+   59.31%     0.08%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_suspend_both   ▒\n+   50.20%     0.38%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] hub_ext_port_status▒\n+   49.52%     0.50%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_control_msg    ▒\n+   45.82%     0.48%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_start_wait_urb ▒\n+   44.86%     0.02%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_resume_interfac▒\n+   44.81%     0.10%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] hub_resume         ▒\n+   44.63%     0.76%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] hub_activate       ▒\n+   36.67%     0.57%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_submit_urb     ▒\n+   36.04%     0.51%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_hcd_submit_urb ▒\n+   34.44%     0.74%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] rh_call_control    ▒\n+   21.56%    20.61%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] xhci_hub_control   ▒\n+   19.73%     0.00%  ksoftirqd/2      [kernel.kallsyms]                                              [k] ret_from_fork      ▒\n+   19.73%     0.00%  ksoftirqd/2      [kernel.kallsyms]                                              [k] kthread            ▒\n+   18.89%     1.01%  ksoftirqd/2      [kernel.kallsyms]                                              [k] smpboot_thread_fn  ▒\n+   12.62%     0.02%  kworker/2:2+pm   [kernel.kallsyms]                                              [k] usb_generic_driver_▒\n")])])]),k("p",[e._v("大概是usb接口的问题")]),e._v(" "),k("p",[e._v("查看一下usb的状态，先检查电源祖通电状态")]),e._v(" "),k("p",[e._v("usb1处于suspending状态")]),e._v(" "),k("p",[k("code",[e._v('echo "on" > /sys/bus/usb/devices/usb1/power/control')])]),e._v(" "),k("p",[e._v("关闭自动控制 ，保持通电状态，成功解决了占用高的问题")]),e._v(" "),k("p",[e._v("可能是usb1线路接触不良导致其频繁在低功耗和全功耗切换，导致kworker占用率高")])])}),[],!1,null,null,null);r.default=l.exports}}]);