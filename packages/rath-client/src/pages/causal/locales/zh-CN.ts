import { MATRIX_MARK_TYPE } from "../matrixPanel";
import { VIEW_TYPE, MATRIX_TYPE } from "../step/causalModal";
import { LayoutMethod } from "../../../store/causalStore/viewStore";
import { EdgeAssert, NodeAssert } from "../../../store/causalStore/modelStore";
import { CausalLinkDirection } from "../../../utils/resolve-causal";
import type { Locales } from ".";

const locales: Locales = {
    title: '因果分析',
    no_connection: {
        before: '服务器没有响应连接，因果分析中部分功能将无法使用。这个模块仍处于实验阶段，如需要帮助，请联系',
        text: '我们',
        after: '获取相关支持。',
        subject: '[Causal] 有关实验模块因果分析技术支持的咨询',
    },
    step: {
        dataset_config: {
            title: '数据集配置',
            description: '从数据中有针对性地选出合适的数据子集以及分析目标关注的因素集合。',
        },
        fd_config: {
            title: '编辑函数依赖',
            description: '基于特定领域或背景知识定义绝对的函数依赖，帮助算法回避不合理的探索空间，更好进行决策。',
        },
        causal_model: {
            title: '因果模型',
            description: '运行因果发现，完善因果图。在已确认的因果图上结合可视化探索进行结论验证和进一步分析。',
        },
    },
    step_control: {
        prev: '上一步',
        next: '继续',
        bypass: '跳过',
    },
    dataset_config: {
        calc: '数据增强',
        filter: '筛选器',
        filter_output: '原始大小：{origin} 行，筛选后子集大小：{filtered} 行',
        filter_disabled_output: '原始大小：{origin} 行（无筛选项）',
        sample: '采样',
        sample_output: '样本量：{size} 行',
        fields: '需要分析的因素',
        field_info: {
            field: '因素（{selected} / {total}）',
            unique: '唯一值数量',
            sType: '类型',
            mean: '均值',
            std: '标准差',
            median: '中位数',
        },
    },
    fd_config: {
        batch: {
            title: '快捷操作',
            delete_all: '全部删除',
            from_ext: '使用扩展字段计算图',
            from_detection: '自动识别',
            preview: '预览',
            cancel: '取消',
        },
        batch_mode: {
            overwrite_only: '更新并替换',
            fill_only: '补充不替换',
            fully_replace: '全部覆盖',
        },
        edit: '编辑视图',
    },
    computing: '计算中',
    chart: {
        re_layout: '重新布局',
        layout: {
            [LayoutMethod.FORCE]: '力引导布局',
            [LayoutMethod.CIRCULAR]: '环形布局',
            [LayoutMethod.RADIAL]: '辐射布局',
            [LayoutMethod.GRID]: '网格布局',
        },
        assertion: {
            edge: '连接两个节点',
            node: '双击一个节点',
            [EdgeAssert.TO_EFFECT]: '一定影响',
            [EdgeAssert.TO_NOT_EFFECT]: '一定不影响',
            [EdgeAssert.TO_BE_RELEVANT]: '一定关联',
            [EdgeAssert.TO_BE_NOT_RELEVANT]: '一定不关联',
            [NodeAssert.FORBID_AS_CAUSE]: '不可作为原因',
            [NodeAssert.FORBID_AS_EFFECT]: '不可作为结果',
            click_edge: '单击一条连接',
            forbid: '取反',
            delete: '删除',
        },
        tools: {
            edit: {
                settings: '交互行为',
                clear: '清空所有',
            },
            resize: '画布缩放',
            write: '编辑因果关系',
            filter_by_confidence: '按置信度筛选',
            filter_by_weight: '按贡献度筛选',
        },
    },
    viewType: {
        label: '视图',
        [VIEW_TYPE.matrix]: '矩阵',
        [VIEW_TYPE.diagram]: '因果图',
    },
    matrix: {
        [MATRIX_TYPE.mutualInfo]: {
            name: '关联信息',
            action: '计算',
        },
        [MATRIX_TYPE.conditionalMutualInfo]: {
            name: '条件关联信息',
            action: '计算',
        },
        [MATRIX_TYPE.causal]: {
            name: '因果模型',
            action: '因果发现',
        },
        markType: {
            label: '标记',
            [MATRIX_MARK_TYPE.circle]: '圆',
            [MATRIX_MARK_TYPE.square]: '矩形',
        },
        causal_direction: {
            label: '连接类型',
            [CausalLinkDirection.none]: '无关',
            [CausalLinkDirection.directed]: '导向',
            [CausalLinkDirection.reversed]: '被导向',
            [CausalLinkDirection.weakDirected]: '导向（弱关系）',
            [CausalLinkDirection.weakReversed]: '被导向（弱关系）',
            [CausalLinkDirection.undirected]: '无向相关',
            [CausalLinkDirection.weakUndirected]: '无向相关（弱关系）',
            [CausalLinkDirection.bidirected]: '双向相关',
        },
        causal_direction_desc: {
            [CausalLinkDirection.none]: 'A 与 B 不相关。',
            [CausalLinkDirection.directed]: 'A 对 B 有影响。',
            [CausalLinkDirection.reversed]: 'A 被 B 影响。',
            [CausalLinkDirection.weakDirected]: '在部分子集合中，A 对 B 有影响。',
            [CausalLinkDirection.weakReversed]: '在部分子集合中，A 被 B 影响。',
            [CausalLinkDirection.undirected]: 'A 与 B 相关，但影响方向不确定。',
            [CausalLinkDirection.weakUndirected]: '在不同的部分子集合中，A 与 B 有不同方向的影响关系。',
            [CausalLinkDirection.bidirected]: 'A 与 B 相互作用。',
        },
    },
    storage: {
        save: '保存因果模型',
        load: '导入因果模型',
        title: '已保存的模型',
        list: '模型列表',
        apply: '导入',
    },
    form: {
        trigger: '参数',
        title: '设置',
        first_level: '算法',
        first_level_desc: '选择运行因果发现的算法实现。',
        run: '运行',
    },
    task: {
        reload: '重新加载',
    },
};

export default locales;