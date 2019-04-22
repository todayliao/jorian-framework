package cn.jorian.jorianframework.core.system.entity;


import cn.jorian.jorianframework.common.model.BaseModel;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @Auther: Administrator
 * @Date: 2019/4/17 08:54
 * @Description:
 */
@Data
public class SysRole extends BaseModel implements Serializable {

    private String name;
    private String describtion;

    @TableField(exist = false) //数据库没有此字段
    private List<SysResource> resources;
}