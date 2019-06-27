import * as ExtensionInfo from "@src/lib/extension_info"
import mergeDeep from "@src/lib/objects.ts"

export async function messageSTG(msg: string, misc?) {
    const obj = {
        action: msg
    }
    console.log(obj)
    return await ExtensionInfo.messageExtension("simple_tab_groups", mergeDeep(obj,misc))
}

export async function loadFirstGroup() {
    return await messageSTG("load-first-group")
}

export async function loadLastGroup() {
    return await messageSTG("load-last-group")
}

export async function loadNextGroup() {
    return await messageSTG("load-next-group")
}

export async function loadPrevGroup() {
    return await messageSTG("load-prev-group")
}

export async function openManageGroups() {
    return await messageSTG("open-manage-groups")
}

export async function addNewGroup() {
    return await messageSTG("add-new-group")
}

export async function deleteCurrentGroup() {
    return await messageSTG("delete-current-group")
}

export async function loadGroup(id: string) {
    return await messageSTG("load-custom-group", {groupId: id})
}

export async function moveCurrentTabToGroup(id: string) {
    return await messageSTG("move-active-tab-to-custom-group", {groupId: id})
}
